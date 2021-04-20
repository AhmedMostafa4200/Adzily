import { Fragment, useState } from "react";

import { withRouter, Route, Switch, Redirect } from "react-router";

import Singers from "./components/Singers";
import Albums from "./components/Albums";
import Songs from "./components/Songs";
import Submit from "./components/Submit";
import Receipt from "./components/Receipt";

import "./style.css";

function App(props) {
  const allSingers = [
    { name: "Amr Diab", _id: 1, price: 50, selected: false },
    { name: "Tamer Hosny", _id: 2, price: 100, selected: false },
    { name: "Shereen", _id: 3, price: 40, selected: false },
    { name: "Asala", _id: 4, price: 35, selected: false },
    { name: "Mohamed Moneir", _id: 5, price: 60, selected: false },
  ];
  let [singers, setSingers] = useState(allSingers);
  let [singersCount, setSingersCount] = useState(0);
  let [singersPrice, setSingersPrice] = useState(0);

  let allAllbums = [
    {
      singerId: 1,
      name: "Tamaly Ma3ak",
      _id: 101,
      price: 25,
      selected: false,
    },
    {
      singerId: 1,
      name: "Elila",
      _id: 102,
      price: 25,
      selected: false,
    },
    {
      singerId: 2,
      name: "Arrab kaman",
      _id: 103,
      price: 40,
      selected: false,
    },
    {
      singerId: 2,
      name: "Hob",
      _id: 104,
      price: 60,
      selected: false,
    },
    {
      singerId: 3,
      name: "Nassay",
      _id: 105,
      price: 15,
      selected: false,
    },
    {
      singerId: 3,
      name: "Garrah Tany",
      _id: 106,
      price: 25,
      selected: false,
    },
    {
      singerId: 4,
      name: "Law Te3rfoo",
      _id: 107,
      price: 20,
      selected: false,
    },
    {
      singerId: 4,
      name: "3adi",
      _id: 108,
      price: 15,
      selected: false,
    },
    {
      singerId: 5,
      name: "Momeken",
      _id: 109,
      price: 30,
      selected: false,
    },
    {
      singerId: 5,
      name: "Shababeek",
      _id: 110,
      price: 30,
      selected: false,
    },
  ];
  let [albums, setAlbums] = useState(allAllbums);
  let [albumsCount, setAlbumsCount] = useState(0);
  let [albumsPrice, setAlbumsPrice] = useState(0);

  let allSongs = [
    {
      name: "Tamaly Ma3ak",
      _id: 1001,
      price: 10,
      albumId: 101,
      selected: false,
    },
    { name: "ٍSeneen", _id: 1002, price: 15, albumId: 101, selected: false },
    { name: "Elila", _id: 1003, price: 15, albumId: 102, selected: false },
    {
      name: "Sebt Faragh Kebeer",
      _id: 1004,
      price: 10,
      albumId: 102,
      selected: false,
    },
    {
      name: "Arrab kaman",
      _id: 1005,
      price: 40,
      albumId: 103,
      selected: false,
    },
    { name: "Hob", _id: 1006, price: 60, albumId: 104, selected: false },
    { name: "Nassay", _id: 1007, price: 15, albumId: 105, selected: false },
    {
      name: "Garrah Tany",
      _id: 1008,
      price: 25,
      albumId: 106,
      selected: false,
    },
    {
      name: "Law Te3rfoo",
      _id: 1009,
      price: 20,
      albumId: 107,
      selected: false,
    },
    { name: "3adi", _id: 1010, price: 15, albumId: 108, selected: false },
    { name: "Momeken", _id: 1011, price: 30, albumId: 109, selected: false },
    { name: "Shababeek", _id: 1012, price: 30, albumId: 110, selected: false },
  ];
  let [songs, setSongs] = useState(allSongs);
  let [songsCount, setSongsCount] = useState(0);
  let [songsPrice, setSongsPrice] = useState(0);

  const handleUpdateSingersState = ({ singer, checked }) => {
    if (!checked) {
      setAlbums((prevAlbums) => {
        return prevAlbums.map((alb) => {
          if (singer._id === alb.singerId) {
            if (alb.selected) {
              setAlbumsPrice((prevPrice) => {
                return prevPrice - alb.price;
              });
              setAlbumsCount((prevCount) => {
                return prevCount - 1;
              });
            }
            alb.selected = false;
          }
          return alb;
        });
      });
    }

    setSingersCount((prevCount) => {
      if (checked) {
        return prevCount + 1;
      } else {
        return prevCount - 1;
      }
    });
    setSingersPrice((prevPrice) => {
      if (checked) {
        return prevPrice + singer.price;
      } else {
        return prevPrice - singer.price;
      }
    });
    setSingers((singers) =>
      singers.map((singr) => {
        if (singr._id === singer._id) {
          singr.selected = checked;
        }
        return singr;
      })
    );
  };

  const handleUpdateAlbumsState = ({ album, checked }) => {
    //
    if (!checked) {
      setSongs((prevSongs) => {
        return prevSongs.map((sng) => {
          if (album._id === sng.albumId) {
            if (sng.selected) {
              setSongsPrice((prevPrice) => {
                return prevPrice - sng.price;
              });
              setSongsCount((prevCount) => {
                return prevCount - 1;
              });
            }
            sng.selected = false;
          }
          return sng;
        });
      });
    }
    //
    setAlbumsCount((prevCount) => {
      if (checked) {
        return prevCount + 1;
      } else {
        return prevCount - 1;
      }
    });
    setAlbumsPrice((prevPrice) => {
      if (checked) {
        return prevPrice + album.price;
      } else {
        return prevPrice - album.price;
      }
    });
    setAlbums((albums) =>
      albums.map((alboum) => {
        if (alboum._id === album._id) {
          alboum.selected = checked;
        }
        return alboum;
      })
    );
  };

  const handleUpdateSongsState = ({ song, checked }) => {
    setSongsCount((prevCount) => {
      if (checked) {
        return prevCount + 1;
      } else {
        return prevCount - 1;
      }
    });
    setSongsPrice((prevPrice) => {
      if (checked) {
        return prevPrice + song.price;
      } else {
        return prevPrice - song.price;
      }
    });
    setSongs((songs) =>
      songs.map((soung) => {
        if (soung._id === song._id) {
          soung.selected = checked;
        }
        return soung;
      })
    );
  };

  let [user, setUser] = useState({});
  const addUserData = (data) => {
    setUser(data);
  };

  return (
    <Fragment>
      {props.location.pathname !== "/receipt" && (
        <ul className="steps mt-3 mb-5">
          <li
            className={`step ${
              props.location.pathname === "/singers"
                ? "step-active"
                : "step-success"
            }`}
          >
            <div className="step-content">
              <span className="step-circle">1</span>
              <span className="step-text">Singers</span>
            </div>
          </li>
          <li
            className={`step ${
              props.location.pathname === "/albums"
                ? "step-active"
                : props.location.pathname !== "/singers"
                ? "step-success"
                : ""
            }`}
          >
            <div className="step-content">
              <span className="step-circle">2</span>
              <span className="step-text">Albums</span>
            </div>
          </li>
          <li
            className={`step ${
              props.location.pathname === "/songs"
                ? "step-active"
                : props.location.pathname === "/submit"
                ? "step-success"
                : ""
            }`}
          >
            <div className="step-content">
              <span className="step-circle">3</span>
              <span className="step-text">Songs</span>
            </div>
          </li>
          <li
            className={`step ${
              props.location.pathname === "/submit" ? "step-active" : ""
            }`}
          >
            <div className="step-content">
              <span className="step-circle">4</span>
              <span className="step-text">Submit</span>
            </div>
          </li>
        </ul>
      )}
      <Switch>
        <Route path="/singers">
          <Singers
            handleSingersStateChange={(singersState) =>
              handleUpdateSingersState(singersState)
            }
            singers={singers}
            singersCount={singersCount}
            singersPrice={singersPrice}
          />
        </Route>
        <Route path="/albums">
          <Albums
            handleAlbumsStateChange={(albumsState) =>
              handleUpdateAlbumsState(albumsState)
            }
            albums={albums.filter((album) => {
              const singer = singers.find(
                (singer) => singer._id === album.singerId
              );
              return singer.selected;
            })}
            albumsCount={albumsCount}
            albumsPrice={albumsPrice}
          />
        </Route>
        <Route path="/songs">
          <Songs
            handleSongsStateChange={(songState) =>
              handleUpdateSongsState(songState)
            }
            songs={songs.filter((song) => {
              const album = albums.find((album) => album._id === song.albumId);
              return album.selected;
            })}
            // songsCount={songsCount}
            // songsPrice={songsPrice}
            songsCount={songs
              .map((song) => {
                const album = albums.find(
                  (album) => album._id === song.albumId
                );
                if (album.selected) {
                  return song.selected ? 1 : 0;
                }
                return 0;
              })
              .reduce((acc, cur) => acc + cur, 0)}
            songsPrice={songs
              .map((song) => {
                const album = albums.find(
                  (album) => album._id === song.albumId
                );
                if (album.selected) {
                  return song.selected ? song.price : 0;
                }
                return 0;
              })
              .reduce((acc, cur) => acc + cur, 0)}
          />
        </Route>
        <Route path="/submit">
          <Submit userData={(data) => addUserData(data)} />
        </Route>
        <Route path="/receipt">
          <Receipt
            user={user}
            songs={songs}
            songsPrice={songs
              .map((song) => {
                const album = albums.find(
                  (album) => album._id === song.albumId
                );
                if (album.selected) {
                  return song.selected ? song.price : 0;
                }
                return 0;
              })
              .reduce((acc, cur) => acc + cur, 0)}
          />
        </Route>
        <Redirect from="/" to="/singers"></Redirect>
      </Switch>
    </Fragment>
  );
}

export default withRouter(App);
