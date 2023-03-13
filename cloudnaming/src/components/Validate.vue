<script>
export default {
    data() {
        return {
            projName: '',
            isValid: false,
        }
    },
    methods: {
        displayDiv() {
            this.isActive = !this.isActive
            document.getElementById('result').style.display = 'block';
        },
        checkName() {
            if (this.projName.length >= 5) {
                this.isValid = true;
            }
            return this.isValid
        }
    },
    computed: {
        isBtnDisabled() {
            return !(this.projName)
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="checkName">
            <div class="container">
                <div class="input-field">
                    <label for="projName">Enter Project Name <span class="req">*</span></label>
                    <div class="input-row">
                        <input type="text" id="projName" v-model="projName" maxlength="30">
                    </div>
                </div>

                <div class="btn-submit">
                    <button type="submit" class="btn btn-primary btn-lg" :disabled="isBtnDisabled" @click="displayDiv">Check
                        Name</button>
                </div>

                <div id="result">
                    <div class="alert alert-secondary" v-class="{ active: displayDiv }">
                        {{ isValid }}
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style>
.input-row input{
    width: 250px; 
}
</style>