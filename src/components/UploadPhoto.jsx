import React from 'react';

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: 'https://cdn.deguisetoi.fr/images/rep_art/gra/174/5/174565/perruque-blonde-hippie-homme_1.jpg',
      files: []
    };
  }

  handleUploadImage = (e) => {
    e.preventDefault();

    const data = new FormData();
    const name = this.uploadInput.files[0].name.split('.', 1);

    data.append('file', this.uploadInput.files[0]);
    data.append('filename', `${name}${this.uploadInput.files[0].lastModified}`);

    fetch('https://powerful-tundra-37364.herokuapp.com/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `https://powerful-tundra-37364.herokuapp.com/mano-photos/${body.file}` });
      });
    });
  };

  render() {
    return (
        <div>
            <h1>File Upload</h1>
            <form onSubmit={this.handleUploadImage}>
                <div>
                    <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                </div>
                <div>
                    <button>Upload</button>
                </div>
            </form>
        </div>
    );
  }
}

export default UploadPhoto;
