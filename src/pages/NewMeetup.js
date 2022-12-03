import React from "react";

import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  const addMeetupHandler = (formData) => {
    fetch("https://react-bru-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.replace("/");
    });
    // for sending http request
  };
  return (
    <section>
      <h2 color="white">Add New Meetup</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
