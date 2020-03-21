<template>
    <div class="pt-2">
        <div class="row m-0 justify-content-center">
            <div class="col-lg-4">
                <div class="card card-info __web-inspector-hide-shortcut__">
                    <div class="card-header">
                        <h3 class="card-title">Edit vehicle type Form</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form class="form-horizontal">
                        <div class="card-body">
                            <div class="form-group">
                                <label>Type Name</label>
                                {{this.$route.params.id}}
                                <input
                                    v-model="form.vehicle_type"
                                    type="text"
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('vehicle_type') }"
                                />
                                <has-error :form="form" field="vehicle_type"></has-error>
                            </div>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <button type="submit" class="btn btn-info float-right">Update</button>
                        </div>
                        <!-- /.card-footer -->
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

    methods: {},

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