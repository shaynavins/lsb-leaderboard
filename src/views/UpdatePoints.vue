<template>
<div class="columns is-mobile is-centered is-vcentered mt-6">
  <div class="column is-half-mobile is-two-fifths-desktop">

    <!-- errrors -->
    <article class="message" v-if="errors" :class="isSuccess ? 'is-success':'is-danger'">
      <div class="message-body">
          <p v-for="(error,index) in errors" :key="index">{{error.message}}</p>
      </div>
    </article>

    <!-- title -->

    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" v-model="title" required placeholder="Posiedon wins first place in the music video event...">
      </div>
    </div>

    <!-- house -->
    
    <div class="field">
      <label class="label">House</label>
      <div class="control">
        <div class="select">
          <select v-model="house" required>
                       <option>Poseidon</option>
            <option>Phoenix</option>
            <option>Hercules</option>

            <option>Ceasar</option>

            
            
            
          </select>
        </div>
      </div>
    </div>

    <!-- message -->

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" v-model="content" required placeholder="Textarea"></textarea>
      </div>
    </div>

  <!-- position -->

  <div class="field">
    <label class="label">Position</label>
    <div class="control">
      <div class="select">
        <select v-model="position">
          <option value="Winner">Winner</option>
          <option value="First runner-up">First runner-up</option>
          <option value="Second runner-up">Second runner-up</option>
        </select>
      </div>
    </div>
  </div>
    <!-- points -->

    <div class="field">
      <label class="label">Points</label>
      <div class="control">
        <input class="input" type="number" v-model="points" required placeholder="Enter additional points won">
      </div>
    </div>

    <!-- name -->

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" v-model="name" required placeholder="Your name">
      </div>
    </div>

    <!-- isWinner -->

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" v-model="isWinner">
          Is Winner?
        </label>
      </div>
    </div>

    <!-- buttons -->

    <div class="field is-grouped mt-6">
      <div class="control">
        <button class="button is-link" :class="{'is-loading':isLoading}" @click="submit">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light" @click="$router.push({name:'Home'})">Back</button>
      </div>
      <!-- delete all live messages -->
      <!-- <div class="control">
        <button class="button is-link is-light" @click="deleteLive">Delete Live</button>
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
import {addMessage} from '../api/addMessage'
import {deleteLive} from '../api/deleteLive'

export default {
  name:'UpdatePoints',
  data(){
    return{
      title:'',
      house:'',
      content:'',
      name:'',
      position:'null',
      errors:null,
      isSuccess:false,
      isLoading:false,
    }
  },
  computed:{
    points(){
      //Point options
      let calculatePoints = {
        'Winner':50,
        'First runner-up':30,
        'Second runner-up':20,
        'default':0
      }

      //Return the calucalted point
      return (calculatePoints[this.position] || calculatePoints['default'])
    },
    isWinner(){
      //Check if winenr
      if(this.position == 'Winner') return true
      else return false
    }
  },
  methods:{
    submit:async function(){
      this.isLoading = !this.isLoading
      this.errors = null

      if(this.title && this.house && this.content && this.points && this.name){
        const message = {
          title:this.title,
          house:this.house,
          content:this.content,
          points:Number(this.points),
          name:this.name,
          mode:'live',
          isWinner:this.isWinner
        }
        addMessage(message)
          .then(res=>{
            this.errors = []
            this.errors.push(res)
            if(res.success) this.isSuccess = true
            this.isLoading = !this.isLoading
          })
          .catch(res=>{
            this.errors = []
            this.errors.push(res)
            if(res.success) this.isSuccess = true
            this.isLoading = !this.isLoading
          })
      }
      else{
        this.errors = []
        this.errors.push({message:'Please enter all fields.'})
        this.isLoading = !this.isLoading
      }
    },
    deleteLive:async function(){
      deleteLive()
    }
  }
}
</script>
