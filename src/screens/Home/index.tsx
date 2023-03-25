import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Box } from '../../components/Spacing';
import { Avatar, Divider } from 'react-native-paper';
import { Title } from '../../components/Texts';
import { Ionicons } from '@expo/vector-icons';


const Home: React.FC = () => {
    return (
        <>
            <SafeAreaView>
                <Box height="100%" width="100%" backgroundColor="white">
                    <Box mt={10}
                        ml={10}
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Box>
                            <Avatar.Image size={50} source={require('../../assets/terapeuta.png')} />
                        </Box>
                        <Box
                            ml={10}
                        >
                            <Title>
                                Olá, Marcela!
                            </Title>
                        </Box>
                    </Box>
                    <Box
                        mt={10}
                        ml={10}
                    >
                        <Divider />
                    </Box>
                    <Box
                        mt={10}
                        ml={10}
                    >
                        <Title>
                            Atendimentos do Dia
                        </Title>
                    </Box>
                </Box>
            </SafeAreaView>
        </>
    )
}

export default Home;