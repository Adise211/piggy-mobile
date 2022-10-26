import { Button, View, Image } from 'react-native';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { useState, useContext } from 'react';
import { AuthContext } from '../store/authContext';

const ImagePicker = ({title}) => {
    const authCtx = useContext(AuthContext)
    const [uri, setUri] = useState(null);

    const takeImageHandler = async () => {
       try {
            const image = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.5
            });
            setUri(image)
            authCtx.userImage(image.uri)

       } catch (error) {
           console.log("Could not take a photo", error);
       }
    };

    return (
        <View>
            <Button title={title} onPress={takeImageHandler}/>
            {/* { uri && <Image source={{ uri: uri }} style={{ width: 100, height: 100 }}/> } */}
        </View>
    )
};

export default ImagePicker;