<template>
    <div id='cssmenu'>
         <ul>
 
                   <li title="Home">
                       <router-link to="/" >
                        <i style="font-size: 15px;" class="fas fa-home"></i>
                      </router-link>
                     </li>
                   <!-- <li class='has-sub'><a href=''><span>Employee Profile</span></a>
                      <ul>
                         <li><a href='#'><span>Product 1</span></a></li>
                         <li><a href='#'><span>Product 2</span></a></li>
                         <li class='last'><a href='#'><span>Product 3</span></a></li>
                      </ul>
                   </li> -->
                  <li ><router-link to="/employee"> Employee Profile</router-link></li>
                     <!-- <a @click="currentPath" href='app#/employee'><span>Employee Profile</span></a> -->
                   <li><router-link to="/career">Careers</router-link></li>
                   <li ><a href='#'><span>Health & Wellness</span></a></li>
                   <li ><a href='#'><span>HR Forms</span></a></li>
                   <li ><a href='#'><span>Benefits Online Services</span></a></li>
                   <li ><a href='#'><span>Policies & Procedure </span></a></li>
                   <li class='last'><a href='#'><span>Handbook</span></a></li>
                </ul>
            </div>
</template>


<script>
export default {
    data: () =>({
        topics : [],
        serverPath : null,

    }),

    computed : {
      appConfig : {
            get(){
                return this.$store.state.appConfig.app; 
            }
        },
        localConfig : {
            get(){
                return this.$store.state.localConfig.app; 
            }
        },
         currentRouteName() {
      //   return this.$route.name;
      return this.$route.path;
         }
      },

    created() {
        // this.serverPath = this.appConfig.protocol + this.appConfig.path  + this.localConfig.secondaryPath;
        // axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("kbt_token");
        // this.fetchTopics();   
     
      //   console.log(window.location.hash)
    },

    methods: {
        fetchTopics()
        {
            axios.post(this.serverPath + '/api/v1/topics/get/all')
            .then( response => {
                this.topics = response.data
            })
        },

        viewTopic(id)
        {
            window.location.replace(this.serverPath + '/topic/show/titlepage?topicId='+id);
        },

      
    },

}
</script>

