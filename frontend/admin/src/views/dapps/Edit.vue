<template>
  <div class="edit">
    <div v-if="wait && id" class="d-flex justify-content-center mb-3">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <ValidationObserver v-slot="{ invalid }">
        <b-form @submit.prevent="onSubmit" @reset="onReset">
          <ValidationProvider
            ref="validationFormUsersId"
            :name="$t('dapps_users_id')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_users_id") }}
              <input
                ref="formUsersId"
                type="text"
                v-model="form.usersId"
                :placeholder="$t('dapps_users_id')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormCategoriesId"
            :name="$t('dapps_categories_id')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_categories_id") }}
              <input
                ref="formCategoriesId"
                type="text"
                v-model="form.categoriesId"
                :placeholder="$t('dapps_categories_id')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormIsOwner"
            :name="$t('dapps_is_owner')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_is_owner") }}
              <input
                ref="formIsOwner"
                type="text"
                v-model="form.isOwner"
                :placeholder="$t('dapps_is_owner')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormName"
            :name="$t('dapps_name')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_name") }}
              <input
                ref="formName"
                type="text"
                v-model="form.name"
                :placeholder="$t('dapps_name')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormLogo"
            :name="$t('dapps_logo')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_logo") }}
              <input
                ref="formLogo"
                type="text"
                v-model="form.logo"
                :placeholder="$t('dapps_logo')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormUrl"
            :name="$t('dapps_url')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_url") }}
              <input
                ref="formUrl"
                type="text"
                v-model="form.url"
                :placeholder="$t('dapps_url')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormImages"
            :name="$t('dapps_images')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_images") }}
              <input
                ref="formImages"
                type="text"
                v-model="form.images"
                :placeholder="$t('dapps_images')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormRecommendTags"
            :name="$t('dapps_recommend_tags')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_recommend_tags") }}
              <input
                ref="formRecommendTags"
                type="text"
                v-model="form.recommendTags"
                :placeholder="$t('dapps_recommend_tags')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormExpectedMainnetTime"
            :name="$t('dapps_expected_mainnet_time')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_expected_mainnet_time") }}
              <input
                ref="formExpectedMainnetTime"
                type="text"
                v-model="form.expectedMainnetTime"
                :placeholder="$t('dapps_expected_mainnet_time')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormStatus"
            :name="$t('dapps_status')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_status") }}
              <input
                ref="formStatus"
                type="text"
                v-model="form.status"
                :placeholder="$t('dapps_status')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormState"
            :name="$t('dapps_state')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_state") }}
              <input
                ref="formState"
                type="text"
                v-model="form.state"
                :placeholder="$t('dapps_state')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormAbstract"
            :name="$t('dapps_abstract')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_abstract") }}
              <input
                ref="formAbstract"
                type="text"
                v-model="form.abstract"
                :placeholder="$t('dapps_abstract')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormDescription"
            :name="$t('dapps_description')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_description") }}
              <input
                ref="formDescription"
                type="text"
                v-model="form.description"
                :placeholder="$t('dapps_description')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormArticleLink"
            :name="$t('dapps_article_link')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_article_link") }}
              <input
                ref="formArticleLink"
                type="text"
                v-model="form.articleLink"
                :placeholder="$t('dapps_article_link')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormHasAffiliateLink"
            :name="$t('dapps_has_affiliate_link')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_has_affiliate_link") }}
              <input
                ref="formHasAffiliateLink"
                type="text"
                v-model="form.hasAffiliateLink"
                :placeholder="$t('dapps_has_affiliate_link')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormAffiliateLink"
            :name="$t('dapps_affiliate_link')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_affiliate_link") }}
              <input
                ref="formAffiliateLink"
                type="text"
                v-model="form.affiliateLink"
                :placeholder="$t('dapps_affiliate_link')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormOnChain"
            :name="$t('dapps_on_chain')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_on_chain") }}
              <input
                ref="formOnChain"
                type="text"
                v-model="form.onChain"
                :placeholder="$t('dapps_on_chain')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormChainsIds"
            :name="$t('dapps_chains_ids')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_chains_ids") }}
              <input
                ref="formChainsIds"
                type="text"
                v-model="form.chainsIds"
                :placeholder="$t('dapps_chains_ids')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormAddress"
            :name="$t('dapps_address')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_address") }}
              <input
                ref="formAddress"
                type="text"
                v-model="form.address"
                :placeholder="$t('dapps_address')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormHasToken"
            :name="$t('dapps_has_token')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_has_token") }}
              <input
                ref="formHasToken"
                type="text"
                v-model="form.hasToken"
                :placeholder="$t('dapps_has_token')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormTokenChainsId"
            :name="$t('dapps_token_chains_id')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_token_chains_id") }}
              <input
                ref="formTokenChainsId"
                type="text"
                v-model="form.tokenChainsId"
                :placeholder="$t('dapps_token_chains_id')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormTokenCoingeckoLink"
            :name="$t('dapps_token_coingecko_link')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_token_coingecko_link") }}
              <input
                ref="formTokenCoingeckoLink"
                type="text"
                v-model="form.tokenCoingeckoLink"
                :placeholder="$t('dapps_token_coingecko_link')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormTokenContract"
            :name="$t('dapps_token_contract')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_token_contract") }}
              <input
                ref="formTokenContract"
                type="text"
                v-model="form.tokenContract"
                :placeholder="$t('dapps_token_contract')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormTokenLogo"
            :name="$t('dapps_token_logo')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_token_logo") }}
              <input
                ref="formTokenLogo"
                type="text"
                v-model="form.tokenLogo"
                :placeholder="$t('dapps_token_logo')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormTokenName"
            :name="$t('dapps_token_name')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_token_name") }}
              <input
                ref="formTokenName"
                type="text"
                v-model="form.tokenName"
                :placeholder="$t('dapps_token_name')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormTokenTicker"
            :name="$t('dapps_users_id')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_token_ticker") }}
              <input
                ref="formTokenTicker"
                type="text"
                v-model="form.tokenTicker"
                :placeholder="$t('dapps_token_ticker')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormDecimal"
            :name="$t('dapps_decimal')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("dapps_decimal") }}
              <input
                ref="formDecimal"
                type="text"
                v-model="form.decimal"
                :placeholder="$t('dapps_decimal')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>

          <b-button type="submit" :disabled="invalid || formWait">
            <b-spinner
              v-if="formWait && formAction == 'onSubmit'"
              small
            ></b-spinner
            >{{ id ? $t("modify") : $t("add") }}
          </b-button>
          <b-button type="reset" :disabled="formWait">{{ $t("cancel") }}</b-button>
          <b-button
            v-if="id"
            type="button"
            @click.prevent.stop="remove"
            :disabled="formWait"
          >
            <b-spinner
              v-if="formWait && formAction == 'remove'"
              small
            ></b-spinner
            >{{ $t("remove") }}
          </b-button>
        </b-form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
/**
 * vuex
 */
import { mapGetters } from "vuex";

/**
 * service
 */
import DappsService from "@/services/dapps.service.js";

export default {
  name: "DappsEdit",
  components: {
    /**
     * components
     */
  },
  data() {
    /**
     * data
     */
    return {
      /**
       * id : 단건 식별자
       * item : 응답 데이터
       * wait : 로딩
       * formWait : 폼 로딩
       * formAction : 폼 액션
       * form : 폼
       */

      id: 0,
      wait: false,
      formWait: false,
      formAction: "",
      form: {
        /**
         * usersId: users id (후보키)
         * categoriesId: categories id (후보키)
         * isOwner: 소유자 여부
         * contactEmail: 연락 가능한 이메일
         * logo: 로고
         * name: 이름
         * url: 웹사이트 주소
         * images: 프리뷰 이미지
         * recommendTags: 추천태그
         * expectedMainnetTime: 메인넷 예상 공개일
         * status: 상태
         * state: 디앱 상태
         * abstract: 짧은 설명
         * description: 긴 설명
         * articleLink: 제품 리뷰 기사
         * hasAffiliateLink: 계열사 링크 여부
         * affiliateLink: 계열사 링크
         * onChain: 온 체인 여부
         * chainsIds: chains id (후보키) / 다중 선택
         * address: 스마트컨트렉트 주소
         * hasToken: 토큰여부
         * tokenChainsId: chains id (후보키)
         * tokenCoingeckoLink: 코인 링크
         * tokenContract: Token Contract
         * tokenLogo: Token Logo 이미지
         * tokenName: Token Name ( Ticker of your token )
         * tokenTicker: Token Ticker ( Ticker of your token )
         * decimal: decimal
         */
        usersId: "",
        categoriesId: "",
        isOwner: "",
        contactEmail: "",
        logo: "",
        name: "",
        url: "",
        images: "",
        recommendTags: "",
        expectedMainnetTime: "",
        status: "",
        state: "",
        abstract: "",
        description: "",
        articleLink: "",
        hasAffiliateLink: "",
        affiliateLink: "",
        onChain: "",
        chainsIds: "",
        address: "",
        hasToken: "",
        tokenChainsId: "",
        tokenCoingeckoLink: "",
        tokenContract: "",
        tokenLogo: "",
        tokenName: "",
        tokenTicker: "",
        decimal: ""
      },
      item: {}
    };
  },
  created() {
    /**
     * created
     */
    if (
      Object.prototype.hasOwnProperty.call(
        this.$router.currentRoute.params,
        "id"
      )
    ) {
      this.id = this.$router.currentRoute.params.id;
      this.findOne();
    }
  },
  mounted() {
    /**
     * mounted
     */
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

      this.formWait = true;
      this.formAction = 'onSubmit';

      let params = {
        usersId: this.form.usersId,
        categoriesId: this.form.categoriesId,
        isOwner: this.form.isOwner,
        contactEmail: this.form.contactEmail,
        logo: this.form.logo,
        name: this.form.name,
        url: this.form.url,
        images: this.form.images,
        recommendTags: this.form.recommendTags,
        expectedMainnetTime: this.form.expectedMainnetTime,
        status: this.form.status,
        state: this.form.state,
        abstract: this.form.abstract,
        description: this.form.description,
        articleLink: this.form.articleLink,
        hasAffiliateLink: this.form.hasAffiliateLink,
        affiliateLink: this.form.affiliateLink,
        onChain: this.form.onChain,
        chainsIds: this.form.chainsIds,
        address: this.form.address,
        hasToken: this.form.hasToken,
        tokenChainsId: this.form.tokenChainsId,
        tokenCoingeckoLink: this.form.tokenCoingeckoLink,
        tokenContract: this.form.tokenContract,
        tokenLogo: this.form.tokenLogo,
        tokenName: this.form.tokenName,
        tokenTicker: this.form.tokenTicker,
        decimal: this.form.decimal
      };

      if (this.id) {
        // 수정
        DappsService.modify(this.id, params).then(
          response => {
            const { data } = response;
            this.item = data;

            alert(this.$t("successful"));
            this.$router.go(-1);

            this.formWait = false;
          },
          error => {
            alert(this.$t("failure"));
            console.log(error);
          }
        );
      } else {
        // 등록
        DappsService.add(params).then(
          response => {
            const { data } = response;
            this.item = data;

            alert(this.$t("successful"));
            this.$router.go(-1);

            this.formWait = false;
          },
          error => {
            if (
              Object.prototype.hasOwnProperty.call(response.data, "message")
            ) {
              alert(response.data.message);
            } else {
              alert(this.$t("failure"));
            }
            console.log(error);
          }
        );
      }
    },
    onReset(evt) {
      evt.preventDefault();

      this.$router.go(-1);
    },
    remove() {
      if (confirm(this.$t("remove_text"))) {
        this.formWait = true;
        this.formAction = 'remove';

        DappsService.remove(this.id).then(
          response => {
            const { data } = response;
            this.item = data;

            alert(this.$t("successful"));
            this.$router.go(-1);

            this.formWait = false;
          },
          error => {
            alert(this.$t("failure"));
            console.log(error);
          }
        );
      }
    },
    findOne() {
      this.wait = true;
      DappsService.findOne(this.id).then(
        response => {
          const { data } = response;
          this.item = data;

          // form
          if (Object.prototype.hasOwnProperty.call(data, "postsId")) {
            this.form.postsId = data.postsId;
          }
          if (Object.prototype.hasOwnProperty.call(data, "usersId")) {
            this.form.usersId = data.usersId;
          }
          if (Object.prototype.hasOwnProperty.call(data, "parent")) {
            this.form.parent = data.parent;
          }
          if (Object.prototype.hasOwnProperty.call(data, "content")) {
            this.form.content = data.content;
          }
          if (Object.prototype.hasOwnProperty.call(data, "type")) {
            this.form.type = data.type;
          }

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
    }
  }
};
</script>

<style scoped></style>
