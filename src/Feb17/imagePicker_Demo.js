import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import React,{useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';


const imagePicker_Demo = (props) => {

  


    const [uri, setUri] = useState(props.source?.uri || undefined)

    const onpress1=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
           // multiple:true,
          }).then(async(image) => {
            const base64image = await RNFS.readFile(image.path, 'base64');
            console.log(base64image);
            setUri(image.path);

              
          });
    }
    const onpress2=()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true 
          }).then(async(image) => {
            const base64image = await RNFS.readFile(image.path, 'base64');
            console.log(base64image);
            setUri(image.path);

          
            RNFS.writeFile(RNFS.ExternalStorageDirectoryPath+"/image.png", base64image, 'base64')
            .then((success) => {
              console.log('IMG COPIED!');
            })
              .catch((err) => {
                console.log(err.message);
              });


            
            
          });
    }

    
    

                        
  return (
    <View style={ImagepickerCSS.mainContainer}>

        <Image
          style={ImagepickerCSS.showImage}
          {...props}
          source={uri ? {uri} : props.source}
        />


        <TouchableOpacity style={ImagepickerCSS.touchableopacity} 
                              onPress={onpress1}>
            <Text style={ImagepickerCSS.textInsideTouchable}>Select Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ImagepickerCSS.touchableopacity} 
                              onPress={onpress2}>
            <Text style={ImagepickerCSS.textInsideTouchable}>Open Camera</Text>
        </TouchableOpacity>

    </View>
  )
}

const ImagepickerCSS = StyleSheet.create({

    mainContainer:{
        flex:1,
        alignItems:'center',
        marginTop:80,
        flexDirection:'column'
    },
    touchableopacity:{
        backgroundColor:'black',
        width:200,
        height:40,
        marginTop:20,
        borderRadius:20,
        justifyContent:'center'
    },
    textInsideTouchable:{
        color:'white',
        alignSelf:'center',
        justifyContent:'center',
        fontSize:20
    },
    showImage:{
        width:200,
        height:200
    }
})

export default imagePicker_Demo;




//MainBundlePath (String) The absolute path to the main bundle directory (not available on Android)

//CachesDirectoryPath (String) The absolute path to the caches directory

//ExternalCachesDirectoryPath (String) The absolute path to the external caches directory (android only)

//DocumentDirectoryPath (String) The absolute path to the document directory

//TemporaryDirectoryPath (String) The absolute path to the temporary directory (falls back to Caching-Directory on Android)

//LibraryDirectoryPath (String) The absolute path to the NSLibraryDirectory (iOS only)

//ExternalDirectoryPath (String) The absolute path to the external files, shared directory (android only)

//ExternalStorageDirectoryPath (String) The absolute path to the external storage, shared directory (android only)