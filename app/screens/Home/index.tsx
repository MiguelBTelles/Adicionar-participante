import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participantes } from '@/app/components/participantes';

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        if(participants.includes(participantName)){
            return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome!")
        }
        
        setParticipants(prevState =>  [...prevState, participantName]);
        setParticipantName('');
        
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Quarta, 13 de novembro de 2024</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={text => setParticipantName(text) }
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={participants}
                keyExtractor={ item => item}
                renderItem={({ item }) => (
                    <Participantes 
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    
                    />
                )}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
           
        </View>
    );
}
