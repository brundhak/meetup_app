import React from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import { useContext } from "react";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <section>
      <h2 color="white">My Favorites</h2>
      {favoritesCtx.favorites.length > 0 ? (
        <MeetupList items={favoritesCtx.favorites} />
      ) : (
        <div>
          <p>Add more...</p>
        </div>
      )}
    </section>
  );
}

export default FavoritesPage;
