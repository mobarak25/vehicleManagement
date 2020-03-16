<template>
  <div class="pt-2">
    <div class="row m-0 justify-content-center">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title m-0 pt-2">Vehicle type list</h3>
            <a
              class="btn btn-primary float-right"
              href="#"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >Add vehicle Type</a>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table id="example1" class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>SL:</th>
                  <th>Vehicle Type Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SL:</td>
                  <td>getAllCategory</td>
                  <td>Win 95+</td>
                </tr>
                <tr>
                  <td>SL:</td>
                  <td>Vehicle Type Name</td>
                  <td>Win 95+</td>
                </tr>
              </tbody>
            </table>
            
            <button v-on:click="getAllCategory(4)">Reduce Price</button>
            
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Enter vehicle type name</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="addType()">
            <div class="modal-body">
              <div class="form-group">
                <label>Type Name</label>
                <input
                  v-model="form.vehicle_type"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('vehicle_type') }"
                />
                <has-error :form="form" field="vehicle_type"></has-error>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vehicle_Type_Component",
  data() {
    return {
      // Create a new form instance
      form: new Form({
        vehicle_type: ""
      })
    };
  },

  methods: {
    addType: function() {
      this.form
        .post("/add-vehicle-type")
        .then(res => {
          $("#exampleModalCenter").modal("hide");
          atoast.fire({
            icon: "success",
            title: "Vehicle added successfully"
          });
        })
        .catch(err => {
          console.log("Error");
        });
    },
    getAllCategory: function(amount){
      console.log('aaaaaaaaaaaaaaaa');
      // this.$store.commit('setCategoryData',amount,  { root: true });
      //  this.$store.commit('reducePrice');
        this.$store.dispatch('allCategoryItem', amount, { root: true })
    }
  },
  computed: {
    
    
  }
};
</script>

<style scoped>
</style>