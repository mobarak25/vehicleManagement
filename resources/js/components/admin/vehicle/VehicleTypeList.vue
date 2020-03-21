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
                                <tr v-for="(category,index) in getAllCategory" :key="index">
                                    <td>SL:</td>
                                    <td>{{category.vehicle_type}}</td>
                                    <td>
                                        <router-link
                                            class="btn btn-outline-info btn-xs"
                                            :to="{name:'vehicle_type_edit', params:{id:category.id}}"
                                        >Edit</router-link>
                                        <a
                                            class="btn btn-outline-danger btn-xs"
                                            href="#"
                                            @click.prevent="deleteType(category.id)"
                                        >Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
                    <form @submit.prevent="addType()" ref="form">
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
                    atoast.fire({
                        icon: "success",
                        title: "Vehicle added successfully"
                    });
                })
                .then(res => {
                    this.$store.dispatch("allCategoryItem");
                    this.form.reset();
                    $("#exampleModalCenter").modal("hide");
                })
                .catch(err => {
                    console.log("Error");
                });
        },

        deleteType(id) {
            var permissiom = confirm("Are you sure, want to delete!");
            if (permissiom == !false) {
                axios
                    .get("/delete-type/" + id)
                    .then(res => {
                        this.$store.dispatch("allCategoryItem");
                        atoast.fire({
                            icon: "success",
                            title: "Vehicle deleted successfully"
                        });
                    })
                    .catch(res => {
                        console.log("error");
                    });
            }
        }
    },

    computed: {
        getAllCategory() {
            return this.$store.getters.getCategory;
        }
    },
    mounted() {
        this.$store.dispatch("allCategoryItem");
    }
};
</script>

<style scoped>
</style>