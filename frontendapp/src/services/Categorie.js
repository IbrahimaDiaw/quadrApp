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
      delete(id) {
        return Api().delete(`/categories/${id}`);
      }
}
export default new CategorieService();
