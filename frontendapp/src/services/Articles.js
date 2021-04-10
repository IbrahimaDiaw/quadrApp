import Api from '@/services/Api'
/* eslint-disable */
class ArticlesService {
    
      getAll() {
        return Api().get("/articles");
      }
    
      get(id) {
        return Api().get(`/articles/${id}`);
      }
    
      create(data) {
        return Api().post("/articles", data);
      }
    
      update(id, data) {
        return Api().put(`/articles/${id}`, data);
      }
    
      delete(id) {
        return Api().delete(`/articles/delete/${id}`);
      }
    
}

export default new ArticlesService()