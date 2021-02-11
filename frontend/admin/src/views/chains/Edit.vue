<template>
  <div class="edit">
    <div v-if="wait && id" class="d-flex justify-content-center mb-3">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <ValidationObserver v-slot="{ invalid }">
        <b-form @submit.prevent="onSubmit" @reset="onReset">
          <ValidationProvider
            ref="validationFormName"
            :name="$t('chains_name')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("chains_name") }}
              <input
                ref="formName"
                type="text"
                v-model="form.name"
                :placeholder="$t('chains_name')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormColorIcon"
            :name="$t('chains_color_icon')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("chains_color_icon") }}
              <input
                ref="formColorIcon"
                type="text"
                v-model="form.colorIcon"
                :placeholder="$t('chains_color_icon')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormIcon"
            :name="$t('chains_icon')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("chains_icon") }}
              <input
                ref="formIcon"
                type="text"
                v-model="form.icon"
                :placeholder="$t('chains_icon')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormIconNew"
            :name="$t('chains_icon_new')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("chains_icon_new") }}
              <input
                ref="formIconNew"
                type="text"
                v-model="form.iconNew"
                :placeholder="$t('chains_icon_new')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormSupportToken"
            :name="$t('chains_support_token')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("chains_support_token") }}
              <input
                ref="formSupportToken"
                type="text"
                v-model="form.supportToken"
                :placeholder="$t('chains_support_token')"
              />
              {{ errors[0] }}
            </label>
          </ValidationProvider>
          <ValidationProvider
            ref="validationFormStatus"
            :name="$t('chains_status')"
            rules="required"
            v-slot="{ errors }"
          >
            <label>
              {{ $t("chains_status") }}
              <input
                ref="formStatus"
                type="text"
                v-model="form.status"
                :placeholder="$t('chains_status')"
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
import ChainsService from "@/services/chains.service.js";

export default {
  name: "ChainsEdit",
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
         * name: 블록체인명
         * colorIcon: 아이콘 컬러(HEX)
         * icon: 아이콘
         * iconNew: 새로운 아이콘
         * supportToken: 토큰 지원여부
         * status: 상태
         */
        name: "",
        colorIcon: "",
        icon: "",
        iconNew: "",
        supportToken: "",
        status: ""
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
        name: this.form.name,
        colorIcon: this.form.colorIcon,
        icon: this.form.icon,
        iconNew: this.form.iconNew,
        supportToken: this.form.supportToken,
        status: this.form.status
      };

      if (this.id) {
        // 수정
        ChainsService.modify(this.id, params).then(
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
        ChainsService.add(params).then(
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

        ChainsService.remove(this.id).then(
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
      ChainsService.findOne(this.id).then(
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
