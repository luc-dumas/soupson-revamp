<template>
  <h1> Calendar </h1>
  <div class="calendar-container">
      <lux-card 
        v-for="(item, index) in events"
        :key="index"
        class="event-card"
      >
      <lux-card-header>
        <lux-heading level="h2" size="h3">{{item.event_name}}</lux-heading> 
        <lux-text-style>{{item.event_date}}</lux-text-style>
      </lux-card-header>
      <lux-card-content>
        <lux-text-style type="span" variation="small">Last Updated on Dec 15, 2018</lux-text-style>
      </lux-card-content>
    </lux-card>
  </div>
</template>

<script>

export default {
  name: 'Calendar',
  components: {
  },
  props: {
  },
  data() {
    return {
      // navItems: ['WHO WE ARE', 'CALENDAR', 'ZINE', 'PORCHFEST', 'LOGIN'],
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
          }
      ],
    }
  },
  computed: {
    // transformedEvents() {
    //   return this.events.map((event, index) => ({
    //     id: index + 1,
    //     title: event.event_name,
    //     caption: event.event_details,
    //     mediaUrl: event.event_image || "",
    //   }));
    // },
  },
  methods: {
  },
  async created() {
    console.log('transformedEvents', this.transformedEvents)
  },
};
</script>


<style>
.calendar-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  /* s */
}
.event-card {
  z-index: -1;
    flex: 1 1 300px;
  max-width: 300px;
  max-height: 300px;
}
@media (min-width: 1260px) {
  .calendar-container {
    justify-content: flex-start;
  }
  .event-card {
    flex: 0 1 300px;
  }
}
@media (max-width: 768px) {
  .event-card {
    flex-basis: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .event-card {
    flex-basis: 100%;
  }
}
</style>