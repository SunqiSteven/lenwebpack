
import React, { Component } from 'react';
 
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
// import 'react-crop/css';
 
// You'll need to use async functions
// import "babel-core/register";
// import "babel-polyfill";
 
export default class MyComponent extends Component {
    constructor() {
        super();
 
        this.state = {
            image: require('../assets/tt.jpg'),
            isCrop: false,
            crop:{
              x: 10,
              y: 10,
              width: 28,
              height: 52
            }
        };
    }
 
    onChange(crop,pixelCrop) {
       console.log(crop,'crop')
       console.log(pixelCrop,'c')
        this.setState({
            crop,
            pixelCrop
        });
    }
 
    crop() {
      const canvas = document.createElement('canvas');
      var {image,pixelCrop} = this.state
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;
      const ctx = canvas.getContext('2d');
      var IMAGE = document.createElement('img')
      IMAGE.src = image
      ctx.drawImage(
        IMAGE,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );
    var avatar = document.createElement('img');
    avatar.src = canvas.toDataURL('image/jpeg');
    document.getElementById('result').appendChild(avatar);
   
      }
  finish(){
     this.setState({
    isCrop: false
  });
  }
  captureFrame(){
    var canvas = document.createElement('canvas')
    var video = document.getElementById('video')
// video.pause()
    var ctx = canvas.getContext('2d')
    var c_w = video.width;
    var c_h = c_w * video.videoHeight/video.videoWidth
    canvas.width = c_w;
    canvas.height = c_h;
    ctx.drawImage(video,0,0,c_w,c_h)
    // console.log(canvas.toDataURL("image/png"))
    var base64Data = canvas.toDataURL("image/jpeg");
    var img = document.createElement('img');
    img.id = 'crop-frame';
    img.src = base64Data;
    this.setState({
      image: base64Data,
      isCrop: true,
    })

}
  cutAvatar(){
    this.captureFrame()
  }
    render() {
        return (
            <div>
            <div style={{'postion':'absolute',border:'1px solid red',width:560,'display':'inline-block'}}>
              <video id="video" 
                controls 
                width="560"
                height="456"
                src={require('../assets/222.mp4')}></video>
            </div>

               <button onClick={() => this.cutAvatar()}>剪一帧</button>
            {
              this.state.isCrop && 
              <div>
               <ReactCrop 
               crop={this.state.crop}
               src={this.state.image} onChange={(crop,pixelCrop) => this.onChange(crop,pixelCrop)}/>
              <button onClick={() => this.crop()} >确定</button>
              <button onClick={() => this.finish()}>完成</button>
              </div>
            }
            <div id="result"></div>
            </div>
        );
    }
}
