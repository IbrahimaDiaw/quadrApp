import Api from '@/services/Api'

class CategorieService {
  /* eslint-disable */
    getAll() {
        return Api().get("/categories");
      }
      get(id) {
        return Api().get(`/categories/${id}`);
      }

      create(data) {
        return Api().post("/categories", data);
      }
    
      update(id, data) {
        return Api().put(`/categories/${id}`, data);
      }

      deleteCategorie(id) {
        return Api().delete(`/categories/delete/${id}`);
      }

      getArticleByCategorie(id){
        return Api().get(`/articles/categories/${id}`);
      }

      getNbreArticle(id){
        return Api().get(`/nbrearticles/categories/${id}`)
      }
}
export default new CategorieService();
