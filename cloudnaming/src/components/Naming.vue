<script>
export default {
    data() {
        return {
            projName: "",
            ObjectName: "",
            FolderName: "",
            isActive: false,
            picked: null,
            Envs: [{ type: 'Dev' }, { type: 'Test' }, { type: 'Prod' }, { type: 'Exp' }, { type: 'Other' }]
        }
    },
    methods: {
        getName() {
            this.ObjectName = "ph-" + this.getEnv() + "-" + projName.value.replace(/\s/g, "").toLowerCase();
            this.FolderName = "ph-" + projName.value.replace(/\s/g, "").toLowerCase();
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
        },
        displayCopied() {
            this.isActive = !this.isActive
            document.getElementById('copied').style.display = 'block';
        },
        copyFolder() {
            var copyText = this.FolderName;
            navigator.clipboard.writeText(copyText);
            this.displayCopied();
        },
        displayCopied2() {
            this.isActive = !this.isActive
            document.getElementById('copied2').style.display = 'block';
        },
        copyProj() {
            var copyText = this.ObjectName;
            navigator.clipboard.writeText(copyText);
            this.displayCopied2();

        },
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
                    <p>Type of environment required <span class="req">*</span></p>

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
                        Folder name: {{ FolderName }} <span class="copyBtn" @click="copyFolder"><img class="copyimg"
                                src="../assets/copy-solid.svg"></span>
                        <span id="copied" class="copied" v-class="{ active: displayCopied }">Copied!</span>
                        <br>
                        Project name: {{ ObjectName }} <span class="copyBtn" @click="copyProj"><img class="copyimg"
                                src="../assets/copy-solid.svg"></span>
                        <span id="copied2" class="copied" v-class="{ active: displayCopied2 }">Copied! </span>

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

.copyBtn img {
    max-width: 20px;
}

.copyBtn img:hover {
    filter: drop-shadow(16px 16px 20px blue) invert(55%);
}

.name {
    display: flex;
}

#result {
    display: none;
    border-radius: 5px;
    background-color: rgb(199, 199, 199);
    padding: 25px 50px;
    margin-top: 10px;
    font-size: 25px;
}

.copied {
    display: none;
    max-width: 75px;
    background-color: black;
    color: white;
    font-size: 12px;
    text-align: center;
    border-radius: 2px;
    padding: 5px 0px;
    transition: visibility 0s 2s, opacity 2s linear;
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
