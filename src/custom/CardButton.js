import { View, Text, StyleSheet, TouchableOpacity, Image, PermissionsAndroid, ActivityIndicator, Alert, Share } from 'react-native'
import React,{useState} from 'react'
import RNFS, { downloadFile } from 'react-native-fs';
import SharePanel from 'react-native-share';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import ReactNativeBlobUtil from 'react-native-blob-util';



const CardButton = () => {

    const [loading, setLoading] = useState(false)

    const permissionAccess = async () => {
        if (Platform.OS === 'ios') {
            return downloadBrochure(item);
        } else {
            try {
                const result = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                ]);
                const isGranted =
                    result[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === 'granted' &&
                    result[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] === 'granted';

                if (isGranted) {
                    downloadBrochure();
                } else {
                    Alert.alert('Oops!', lang.account?.download.error.noPermission);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    const getDownloadFolderPath = () => {
        if (Platform.OS === 'ios') {
            return RNFS.DocumentDirectoryPath;
        } else if (Platform.OS === 'android') {
            return RNFS.DownloadDirectoryPath;
        }
    };

      
    const downloadBrochure = async () => {
        setLoading(true);
        const filename = 'document.pdf';
        const url = `https://www.kwsp.gov.my/documents/20126/131635/Akaun_Emas_BM_13012017.pdf`;

        const { config, fs } = ReactNativeBlobUtil;

        let cacheDir = getDownloadFolderPath();
        const imagePath = `${cacheDir}/${filename}`;

        try {
            // Download the file and save it to the cache directory
            const configOptions = Platform.select({
                ios: {
                    fileCache: true,
                    path: imagePath,
                    appendExt: filename.split('.').pop()
                },
                android: {
                    fileCache: true,
                    path: imagePath,
                    appendExt: filename.split('.').pop(),
                    addAndroidDownloads: {
                        // Related to the Android only
                        useDownloadManager: true,
                        notification: true,
                        path: imagePath,
                        description: 'File'
                    }
                }
            });
            const response = await ReactNativeBlobUtil.config(configOptions)
            .fetch('GET', url)
            .then((res) => {
                return res;
            });
        setLoading(false);
        const path = response.path();
        shareBrochure(path);
        } catch (error) {
            setLoading(false);
            Alert.alert('Some Error occured!');
            console.error(error);
            return null;
        }
    };

    

    const shareBrochure = async (item) => {
        setLoading(true);
        const shareOptions = {
            url: `${item}`
        };

        await Share.share(url);
        setLoading(false);
    };


  return (
    <View style={styles.mainContainer}>
        {loading ? (<ActivityIndicator/>):  
        <TouchableOpacity onPress={()=> downloadBrochure()} style={{backgroundColor:'black',width:120,height:40,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white'}}>Download</Text>
        </TouchableOpacity>
    //     <View style={styles.backgroundContainer}>
    //         <View style={styles.buttonContainer}>
    //         <View style={{flexDirection:'row', marginTop:20,marginHorizontal:20, justifyContent:'space-between'}}>
    //             <Text style={{color:'#6AAAC2'}}>Prize Pool</Text>
    //             <Text style={{color:'#6AAAC2'}}>Entry</Text>
    //         </View>
    //         <View style={{flexDirection:'row', paddingHorizontal:20,marginTop:15, justifyContent:'space-between'}}>
    //             <Text style={{color:'black',fontWeight:'700', fontSize:22}}>₹1.20 Crores</Text>
    //             <TouchableOpacity onPress={()=> downloadBrochure()} style={{backgroundColor:'black',width:120,height:40,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
    //                 <Text style={{color:'white'}}>₹49</Text>
    //             </TouchableOpacity>
    //         </View>
    //         <View style={{alignSelf:'center',width:'88%',backgroundColor:'white',height:8,borderRadius:10,marginTop:10}}/>
    //         <View style={{height:5}}/>
    //             <View style={{flexDirection:'row', paddingHorizontal:22, justifyContent:'space-between'}}>
    //                 <Text style={{color:'#6A1F20',fontWeight:'400'}}>3,02,985 spots left</Text>
    //                 <Text style={{color:'#6AAAC2'}}>4,00,0000 spots</Text>
    //             </View>
    //         <View style={{height:10}}/>
    //         <View style={{height:1,backgroundColor:'#6AAAC2',width:'100%',alignSelf:'center'}}/>
    //     <View style={{flexDirection:'row', marginTop:15,marginHorizontal:20, justifyContent:'space-between',alignSelf:'center',width:'90%'}}>
    //         <View style={{justifyContent:'space-around',flexDirection:'row',width:'65%'}}>
    //             <View style={{flexDirection:'row'}}>
    //                 <Image/>
    //                 <Text style={{color:'black'}}>₹5,00,000</Text>
    //             </View>
    //             <View style={{flexDirection:'row'}}>
    //             <Image/>
    //                 <Text style={{color:'black'}}>58%</Text>
    //             </View>
    //             <View style={{flexDirection:'row'}}>
    //             <Image/>
    //                 <Text style={{color:'black'}}>₹5,00,000</Text>
    //             </View>
    //         </View>
    //         <View>
    //             <Text style={{color:'#1A9B4F'}}>Guarenteed</Text>
    //         </View>
    //     </View>
    //   </View>
    //   <Text style={{color:'white',marginLeft:20,marginTop:10}}>Joined Once</Text>
    //     </View>
    }
   
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column'
    },
    buttonContainer:{
        height:220,
        width:'100%',
        height:200,
        backgroundColor:'#E1F3FE',
        borderRadius:20,
        alignSelf:'center',
    },
    backgroundContainer:{
        backgroundColor:'#6AAAC2', 
        width:'92%',
        height:250,
        alignSelf:'center',
        borderRadius:20
    }
})

export default CardButton;