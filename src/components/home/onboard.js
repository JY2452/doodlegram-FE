import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../actions/user';
import nopfp from '../../assets/nopfp.png';

const submit = (update, props) => {
  props.updateUser(props.user._id, update);
  props.history.push('/');
};

const Onboard = (props) => {
  const [name, setName] = useState(props.user.name);
  const [gender, setGender] = useState(props.user.gender);
  const [favoriteColor, setColor] = useState(props.user.favoriteColor);
  const [home, setHome] = useState(props.user.home);
  const [birthday, setBirth] = useState(props.user.birthday);
  const [favoriteShoe, setShoe] = useState(props.user.favoriteShoe);
  const [favoriteArtist, setArtist] = useState(props.user.favoriteArtist);
  const [quote, setQuote] = useState(props.user.quote);
  const [preview, setPreview] = useState();

  return (
    <div>
      <div className="onboardScreen">
        <div className="welcomeText">
          <h1>Edit Profile</h1>
          <p>Please fill out the following fields to complete your Doodlegram profile!</p>
          <p>All fields are optional and can be edited at any time.</p>

          <div id="pfp">
            <p>Select a Profile Picture</p>
            <img id="previewImg" alt="preview" src={preview || nopfp} />
            <input type="file" name="coverImage" accept="image/*" onChange={(e) => setPreview(window.URL.createObjectURL(e.target.files[0]))} />
          </div>

          <p>😀 Name 😀</p>
          <b>(ex: Bob Ross)</b>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder={props.user.name} />

          <p>👤 Gender 👤</p>
          <b>(ex: Male)</b>
          <input type="text" onChange={(e) => setGender(e.target.value)} placeholder={props.user.gender} />

          <p>🎨 Favorite Color 🎨</p>
          <b>(ex: Purple)</b>
          <input type="text" onChange={(e) => setColor(e.target.value)} placeholder={props.user.favoriteColor} />

          <p>📍 Home 📍</p>
          <b>(ex: Seattle, WA)</b>
          <input type="text" onChange={(e) => setHome(e.target.value)} placeholder={props.user.home} />

          <p>🎂 Birthday 🎂</p>
          <b>(ex: 1/01/01)</b>
          <input type="text" onChange={(e) => setBirth(e.target.value)} placeholder={props.user.birthday} />

          <p>👟 Favorite Shoe 👟</p>
          <b>(ex: Adidas)</b>
          <input type="text" onChange={(e) => setShoe(e.target.value)} placeholder={props.user.favoriteShoe} />

          <p>🎧 Favorite Artist 🎧</p>
          <b>(ex: Bruno Mars)</b>
          <input type="text" onChange={(e) => setArtist(e.target.value)} placeholder={props.user.favoriteColor} />

          <p>💬 Favorite Quote 💬</p>
          <b>(ex: &quot;Life is like a box of chocolates&quot; -Forrest Gump) </b>

          <textarea type="text" onChange={(e) => setQuote(e.target.value)} placeholder={props.user.quote} />

          <button type="submit"
            onClick={() => submit({
              name, gender, favoriteColor, home, birthday, favoriteShoe, favoriteArtist, quote,
            }, props)}
          >Join
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  user: reduxState.auth.userObject.user,
});

export default withRouter(connect(mapStateToProps, { updateUser })(Onboard));
