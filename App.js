// Import necessary modules
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native';

export default function App() {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  // Handler to increase score
  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore === 10) Alert.alert('Game Over', 'Team A Wins!');
    } else {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore === 10) Alert.alert('Game Over', 'Team B Wins!');
    }
  };

  // Handler to decrease score
  const decreaseScore = (team) => {
    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  // Handler to reset scores
  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1609838466966-e2d2e2d9089c' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>⚽ Futsal Scoreboard ⚽</Text>

        <View style={styles.teamContainer}>
          <Text style={[styles.teamName, styles.teamA]}>Team A</Text>
          <Text style={styles.score}>{scoreTeamA}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, styles.buttonA]} onPress={() => increaseScore('A')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonA]} onPress={() => decreaseScore('A')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.teamContainer}>
          <Text style={[styles.teamName, styles.teamB]}>Team B</Text>
          <Text style={styles.score}>{scoreTeamB}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, styles.buttonB]} onPress={() => increaseScore('B')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonB]} onPress={() => decreaseScore('B')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
          <Text style={styles.resetButtonText}>Reset Scores</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffdd59',
    marginBottom: 40,
  },
  teamContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 25,
    borderRadius: 15,
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  teamName: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  teamA: {
    color: '#ff6b81',
  },
  teamB: {
    color: '#1e90ff',
  },
  score: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#f5f6fa',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 160,
  },
  button: {
    padding: 18,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 3,
  },
  buttonA: {
    backgroundColor: '#ff4757',
  },
  buttonB: {
    backgroundColor: '#1e90ff',
  },
  buttonText: {
    fontSize: 22,
    color: '#f5f6fa',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#7bed9f',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    elevation: 5,
  },
  resetButtonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
