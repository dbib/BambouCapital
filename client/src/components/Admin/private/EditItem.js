import React, { Component } from "react";
import axios from "axios";

import "./EditItem.css";

export default class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName: "",
      description: "",
      itemImage: "",
      date: new Date(),
      charactersNumber: 280,
    };

    //this.fileInput = React.createRef();
  }

  characterCompute = (e) => {
    let descriptionLoc = this.state.description;
    let descNumber = descriptionLoc.length;
    let diff = 281 - descNumber;
    this.setState({
      charactersNumber: diff,
    });
  };

  onChangeItemName = (e) => {
    this.setState({
      itemName: e.target.value,
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });

    this.characterCompute();
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/articles/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          itemName: res.data.itemName,
          description: res.data.description,
          itemImage: res.data.imagePath,
          date: new Date(res.data.date),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeHandler = (e) => {
    this.setState({
      itemImage: e.target.files[0],
      loaded: 0,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    let { itemName, description, date } = this.state;

    itemName = itemName.trim();

    description = description.trim();
    description = description.substring(0, 279);

    const Item = {
      itemName,
      description,
      date,
    };

    //sending data to our backend
    axios
      .post(
        "http://localhost:5000/articles/update/" + this.props.match.params.id,
        Item
      )
      .then((res) => console.log(res.data));

    //sending image data
    if (this.state.itemImage !== "") {
      const data = new FormData();
      data.append("file", this.state.itemImage);
      axios
        .post(
          "http://localhost:5000/articles/updateimage/" +
            this.props.match.params.id,
          data,
          {}
        )
        .then((res) => {
          console.log(res.statusText);
        });
    }

    this.setState({
      itemName: "",
      description: "",
      itemImage: "",
      date: new Date(),
    });

    window.location = "/gallery";
  };

  render() {
    let descriptionFlag = "desc-level";
    if (this.state.charactersNumber < 0) {
      descriptionFlag = "redflag";
    }
    return (
      <div className="edit-item">
        <div className="edit-item-root">
          <div className="edit-product-infos-container">
            <h2>Modifier l'article</h2>
            <form
              onSubmit={this.onSubmit}
              encType="multipart/form-data"
              id="form-id"
            >
              <div className="edit-form-group">
                <label>Nom de l'article:</label>
                <input
                  type="text"
                  name="articleName"
                  required
                  value={this.state.itemName}
                  onChange={this.onChangeItemName}
                  className="edit-infos-text"
                />
              </div>
              <div className="edit-form-group">
                <div className={descriptionFlag}>
                  <label>Déscription:</label>
                  <p>{this.state.charactersNumber}</p>
                </div>
                <textarea
                  type="text"
                  name="articleDescription"
                  required
                  placeholder="décrivez un peu l'article que vous voulez ajouter"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  className="infos-text"
                ></textarea>
              </div>
              <div className="edit-form-group file">
                <label>Changer la photo</label>
                <input
                  type="file"
                  name="file"
                  onChange={this.onChangeHandler}
                  className="edit-infos-text edit-infox-img-box"
                />
              </div>
              <div className="edit-form-group">
                <input
                  type="submit"
                  value="Modifier l'article"
                  name="uploaded_file"
                  className="edit-infos-submit-botton"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
