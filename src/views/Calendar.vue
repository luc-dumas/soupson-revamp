<template>
  <div class="page-wrapper">
    <div class="header-div">
      <h1> Calendar </h1>
        <div class="toggle-switch">
          <label class="switch">
            <input type="checkbox" v-model="showCardView">
            <span class="slider"></span>
          </label>
        </div>
    </div>

    <div v-if="!showCardView">
      <!-- <div
        v-for="(item, index) in events"
        :key="index"
        class="event-list" 
      >
        <p>{{ formatDate(item.event_date) }}</p>
        <h2>{{ item.event_name }}</h2>
        <p>{{item.event_details}}</p>
      </div> -->
      <lux-card id="b" size="full-width" v-for="(item, index) in events"
        :key="index">
        <lux-card-media>
          <lux-icon-base width="50" height="50" icon-hide="true">
            <lux-icon-globe></lux-icon-globe>
          </lux-icon-base>
        </lux-card-media>
        <lux-card-header>
          <!-- Hyperlink is the text screen readers would read, we don't want to wrap the entire card -->
          <lux-heading level="h2" size="h3"><lux-hyperlink href="#">Code4Lib - Trip ID 1234</lux-hyperlink></lux-heading>
          <lux-text-style>Jan 9, 2019 to Jan 16, 2019</lux-text-style>
        </lux-card-header>
        <lux-card-content>
          <lux-tag type="tag" :tag-items="[
            {name: 'Pending', color: 'yellow', style: 'pill'}
            ]"
            horizontal="end"
            size="small"/>
          <lux-text-style type="span" variation="small">Last Updated on Dec 15, 2018</lux-text-style>
        </lux-card-content>
      </lux-card>
      
    </div>


    <div v-if="showCardView" class="calendar-container">
      <lux-card 
        v-for="(item, index) in events"
        :key="index"
        class="event-card"
      >
        <lux-card-header>
          <lux-heading class="lux-text" level="h2" size="h3">{{item.event_name}}</lux-heading> 
          <lux-text-style class="lux-text">{{item.event_date}}</lux-text-style>
        </lux-card-header>
        <lux-card-content class="lux-text">
          <lux-text-style class="lux-text" type="span" variation="small">Last Updated on Dec 15, 2018</lux-text-style>
        </lux-card-content>
      </lux-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment';


export default {
  name: 'Calendar',
  components: {
  },
  props: {
  },
  data() {
    return {
      showCardView: false,
      events: 
        [
          {
            event_name: "New Event Title Here",
            event_details: "Event Description goes here. Explain all about your event in here. ",
            event_date: "2024-03-22 17:30:21.000000",
            event_image: null,
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Event",
            event_details: "foobar",
            event_date: "2024-04-19 17:30:34.000000",
            event_image: null,
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "Foo",
            event_details: "Bar",
            event_date: "2024-05-24 17:30:51.000000",
            event_image: null,
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Event",
            event_details: "This is a very special event. ",
            event_date: "2024-04-30 14:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-event.png",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "XYZ Event",
            event_details: "Those Looks play the Thunderdome!",
            event_date: "2024-04-30 15:00:00.000000",
            event_image: "\/partners\/imgs\/events\/xyz-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
          {
            event_name: "My Big Event",
            event_details: "*Friday, April 19, 2024 5:30 PM*\r\n\r\n---\r\n\r\n* 5:30pm **Hollow Howl** - Cathartic New Wave Psych Rock\r\n\r\n* 6:30pm **The Swiss Guard** - Lyrics that make you think. Music that makes you move.\r\n\r\n* 7:30pm **Christina Ward** - Ethereal mermaid shreds guitar with legendary backing band. \r\n\r\n---\r\n\r\n",
            event_date: "2024-04-24 16:00:00.000000",
            event_image: "\/partners\/imgs\/events\/my-big-event.jpeg",
            event_soupcon: true,
            event_host: "Lambertville Area Music Collective",
            event_author: "John Doe",
            event_venue: "Union Coffee",
            venue_address: "25 North Union Street, Lambertville, NJ 08530"
          },
      ],
    }
  },
  computed: {
  },
  methods: {
    toggle() {
      console.log('toggle')
    },
    formatDate(date){
      return moment(date).format("dddd, MMM Do YYYY, h a")
    }
  },
  async created() {
    console.log('transformedEvents', this.transformedEvents)
  },
  watch: {
    showCardView: {
      handler: function() {
        console.log('showCardView', this.showCardView)
      },
      deep: true
    }
  }
};
</script>


<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 4px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 4px;
}

input:checked + .slider {
  background-color: #4d4d4d;
}

input:focus + .slider {
  box-shadow: 0 0 1px #4d4d4d;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
} 

.toggle-switch {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
}

body {
  background-color: #2F2E2C;
}

.page-wrapper {
  max-width: 100%;
  /* height: 100%; */
  min-height: 100vh;
  background-color: #2F2E2C;
  margin-left: 40px;
  margin-right: 40px;
  border-right: 2px solid #555555;
  border-left: 2px solid #555555;
  /* margin-top: 0px; */

}
.calendar-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 325px); /* Adjusted this line */
  gap: 30px 30px;
  justify-items: center;  
  justify-content: center;
  align-items: center; 

}
.event-card {
  width: 325px !important;
  height: 325px !important;
  background-color: #2F2E2C;
  border-radius: 3px;
  border: 1px solid #fff;
}

.lux-text {
  color: #fff;
}

.event-list {
  display: flex;
  background-color: #2F2E2C;
  border-radius: 1px;
  border: 1px solid #fff;
  padding: 20px;
  margin: 0 20px 20px 20px;
  justify-content: space-between;

}

@media (min-width: 1260px) {
  /* .calendar-container {
    justify-content: flex-start;
  }
  .event-card {
    flex: 0 1 300px;
  } */
}
@media (max-width: 768px) {
  /* .event-card {
    flex-basis: calc(50% - 20px);
  } */
}

@media (max-width: 480px) {
  /* .event-card {
    flex-basis: 100%;
  } */
}
</style>