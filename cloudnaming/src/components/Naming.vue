<script>
export default {
    data() {
        return {
            projName: "",
            ObjectName: "",
            isActive: false,
            picked: null,
            Envs: [{ type: 'Dev' }, { type: 'Test' }, { type: 'Prod' }, { type: 'Exp' }, { type: 'Other' }]
        }
    },
    methods: {
        getName() {
            this.ObjectName = "ph-" + this.getEnv() + "-" + projName.value.replace(/\s/g, "").toLowerCase();
        },
        getEnv() {
            if (this.picked == "Dev") {
                return "d"
            }
            else if (this.picked == "Test") {
                return "t"
            }
            else if (this.picked == "Prod") {
                return "p"
            }
            else if (this.picked == "Exp") {
                return "x"
            }
            else if (this.picked == "Other") {
                return "o"
            }

        },
        displayDiv() {
            this.isActive = !this.isActive
            document.getElementById('result').style.display = 'block';
        }
    },
    computed: {
        isBtnDisabled() {
            // comment; the shorter version proposed by Boussadjra Brahim
            // return !(this.name && this.fname && this.phn)
            return !(this.projName && this.picked)
        }
    }
}

</script>
<template>
    <div class="container" id="app">
        <form @submit.prevent="getName">
            <div class="container">
                <div class="input-field">
                    <label for="projName">Enter Project Name (max 25 chars.) <span class="req">*</span></label>
                    <div class="input-row">
                        <input type="text" id="projName" v-model="projName" maxlength="25">
                    </div>
                </div>

                <div class="env-options">
                    <p>Type of environment required<span class="req">*</span></p>

                    <ul>
                        <label v-for="env in Envs" :key="env.type">
                            <li> <input type="radio" id="dev" :value="env.type" v-model="picked">
                                {{ env.type }}</li>

                        </label>
                    </ul>
                </div>

                <div class="btn-submit">
                    <button type="submit" class="btn btn-primary btn-lg" :disabled="isBtnDisabled" @click="displayDiv">Get
                        Name</button>
                </div>

                <div id="result">
                    <div class="alert alert-secondary" v-class="{ active: displayDiv }">
                        {{ ObjectName }}
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>



<style>
.input-row {
    display: flex;
}

.req {
    color: red;
}

.btn-submit {}

#result {
    display: none;
    border-radius: 5px;
    background-color: rgb(199, 199, 199);
    padding: 25px 50px;
    margin-top: 10px;
    font-size: 25px;
}

.env-options ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.env-options {
    margin-bottom: 25px;
}
</style>