<template>
  <div class="list">
    <b-container fluid>
      <!-- 검색 폼 -->
      <b-form inline @submit="onSubmit" @reset="onReset">
        <b-form-select
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="search.type"
          :options="searchTypeOptions"
          :value="null"
        ></b-form-select>
        <b-form-input
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="search.q"
          :placeholder="$t('input_search')"
        ></b-form-input>
        <b-button variant="primary" type="submit">{{
          $t("button_search")
        }}</b-button>
      </b-form>

      <!-- 검색 결과 -->
      <b-table
        striped
        hover
        responsive
        :busy="wait"
        :items="items"
        :fields="fields"
      >
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
        <template #cell(actions)="row">
          <b-link :to="{ name: 'DappsId', params: { id: row.item.id } }">
            <b-icon-search></b-icon-search>
          </b-link>
          <b-link :to="{ name: 'DappsEditId', params: { id: row.item.id } }">
            <b-icon-pencil></b-icon-pencil>
          </b-link>
        </template>
      </b-table>

      <!-- 페이징 -->
      <b-row>
        <b-col lg="6">
          <div
            align="left"
            v-html="
              $t('showing_currentPage_to_pagesize_of_totalitems_entries', {
                currentPage: $n(currentPage),
                pageSize: $n(pageSize),
                totalItems: $n(totalItems)
              })
            "
          ></div>
        </b-col>
        <b-col lg="6">
          <b-pagination-nav
            :link-gen="linkGen"
            :number-of-pages="totalPages"
            v-model="currentPage"
            align="right"
            @page-click="pageLink"
          ></b-pagination-nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

/**
 * service
 */
import DappsService from "@/services/dapps.service.js";

export default {
  name: "DappsList",
  components: {
    /**
     * components
     */
  },
  data() {
    return {
      /**
       * search : 검색 데이터
       * searchTypeOptions : 검색 항목
       * fields : 검색결과 페이지 리스트 필드
       * items : 응답 리스트 데이터
       * page : 검색결과 페이지 데이터
       * wait : 로딩
       * totalItems : 전체 데이터수
       * totalPages : 전체 페이지수
       * currentPage : 현제 페이지
       * pageSize: 페이지 요청 데이터수
       */
      wait: false,
      search: {
        /**
         * type : 검색항목
         * q : 검색어
         */
        type: "",
        q: ""
      },
      searchTypeOptions: [],
      fields: [
        {
          /**
           * users id (후보키) */
          key: "usersId",
          label: this.$t("dapps_users_id")
        },
        {
          /**
           * categories id (후보키) */
          key: "categoriesId",
          label: this.$t("dapps_categories_id")
        },
        {
          /**
           * 소유자 여부 */
          key: "isOwner",
          label: this.$t("dapps_is_owner")
        },
        {
          /**
           * 연락 가능한 이메일 */
          key: "contactEmail",
          label: this.$t("dapps_contact_email")
        },
        {
          /**
           * 로고 */
          key: "logo",
          label: this.$t("dapps_logo")
        },
        {
          /**
           * 이름 */
          key: "name",
          label: this.$t("dapps_name"),
          isSearch: true
        },
        {
          /**
           * 웹사이트 주소 */
          key: "url",
          label: this.$t("dapps_url"),
          isSearch: true
        },
        {
          /**
           * 프리뷰 이미지 */
          key: "images",
          label: this.$t("dapps_images")
        },
        {
          /**
           * 추천태그 */
          key: "recommendTags",
          label: this.$t("dapps_recommend_tags")
        },
        {
          /**
           * 메인넷 예상 공개일 */
          key: "expectedMainnetTime",
          label: this.$t("dapps_expected_mainnet_time")
        },
        {
          /**
           * 상태 */
          key: "status",
          label: this.$t("dapps_status")
        },
        {
          /**
           * 디앱 상태 */
          key: "state",
          label: this.$t("dapps_state")
        },
        {
          /**
           * 짧은 설명 */
          key: "abstract",
          label: this.$t("dapps_abstract")
        },
        {
          /**
           * 긴 설명 */
          key: "description",
          label: this.$t("dapps_description")
        },
        {
          /**
           * 제품 리뷰 기사 */
          key: "articleLink",
          label: this.$t("dapps_article_link")
        },
        {
          /**
           * 계열사 링크 여부 */
          key: "hasAffiliateLink",
          label: this.$t("dapps_has_affiliate_link")
        },
        {
          /**
           * 계열사 링크 */
          key: "affiliateLink",
          label: this.$t("dapps_affiliate_link")
        },
        {
          /**
           * 온 체인 여부 */
          key: "onChain",
          label: this.$t("dapps_on_chain")
        },
        {
          /**
           * chains id (후보키) / 다중 선택 */
          key: "chainsIds",
          label: this.$t("dapps_chains_ids")
        },
        {
          /**
           * 스마트컨트렉트 주소 */
          key: "address",
          label: this.$t("dapps_address")
        },
        {
          /**
           * 토큰여부 */
          key: "hasToken",
          label: this.$t("dapps_has_token")
        },
        {
          /**
           * chains id (후보키) */
          key: "tokenChainsId",
          label: this.$t("dapps_token_chains_id")
        },
        {
          /**
           * 코인 링크 */
          key: "tokenCoingeckoLink",
          label: this.$t("dapps_token_coingecko_link")
        },
        {
          /**
           * Token Contract */
          key: "tokenContract",
          label: this.$t("dapps_token_contract")
        },
        {
          /**
           * Token Logo 이미지 */
          key: "tokenLogo",
          label: this.$t("dapps_token_logo")
        },
        {
          /**
           * Token Name ( Ticker of your token ) */
          key: "tokenName",
          label: this.$t("dapps_token_name")
        },
        {
          /**
           * Token Ticker ( Ticker of your token ) */
          key: "tokenTicker",
          label: this.$t("dapps_token_ticker")
        },
        {
          /**
           * decimal */
          key: "decimal",
          label: this.$t("dapps_decimal")
        },
        {
          /**
           * Action
           */
          key: "actions",
          label: "Actions"
        }
      ],
      items: [],
      totalItems: 0,
      totalPages: 0,
      currentPage: 1,
      pageSize: 10
    };
  },
  created() {
    /**
     * created
     */
    if (
      Object.prototype.hasOwnProperty.call(
        this.$router.currentRoute.query,
        "page"
      )
    ) {
      this.currentPage = this.$router.currentRoute.query.page;
    }

    if (
      Object.prototype.hasOwnProperty.call(
        this.$router.currentRoute.query,
        "type"
      ) &&
      Object.prototype.hasOwnProperty.call(this.$router.currentRoute.query, "q")
    ) {
      this.search.type = this.$router.currentRoute.query.type;
      this.search.q = this.$router.currentRoute.query.q;
    }

    this.findAll();
  },
  mounted() {
    /**
     * mounted
     */
    let type = "";
    this.fields.forEach(row => {
      if (row.isSearch) {
        this.searchTypeOptions.push({
          text: row.label,
          value: row.key
        });

        if (this.search.type == row.key) {
          type = row.key;
        }
      }
    });

    if (type) {
      this.search.type = type;
    } else {
      this.search.type = this.searchTypeOptions[0].value;
    }
  },
  computed: {
    /**
     * computed
     */
    ...mapGetters(["isAuthenticated"])
  },
  destroyed() {
    /**
     * destroyed
     */
  },
  methods: {
    /**
     * methods
     */
    async onSubmit(evt) {
      evt.preventDefault();

      this.findAll();
    },
    onReset(evt) {
      evt.preventDefault();

      this.search.q = "";
    },
    findAll() {
      this.wait = true;

      const params = {
        page: this.currentPage,
        size: this.pageSize
      };

      if (this.search.q && this.search.type) {
        params[this.search.type] = this.search.q;
      }

      DappsService.findAll(params).then(
        response => {
          const { data } = response;
          this.totalItems = data.totalItems;
          this.totalPages = data.totalPages;
          this.items = data.items;
          this.wait = false;
        },
        error => {
          if (
            Object.prototype.hasOwnProperty.call(error.response.data, "message")
          ) {
            alert(response.data.message);
          }
          this.wait = false;
        }
      );
    },
    pageLink(button, page) {
      this.currentPage = page;
      this.findAll();
    },
    linkGen(pageNum) {
      const query = {};
      if (this.search.q && this.search.type) {
        query.type = this.search.type;
        query.q = this.search.q;
      }

      query.page = pageNum;

      return {
        path: "/comments/",
        query: query
      };
    }
  }
};
</script>

<style scoped></style>
