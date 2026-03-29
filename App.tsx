import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [quote, setQuote] = useState('');
  const [summary, setSummary] = useState('');

  const handleQuoteChange = (text) => {
    setQuote(text);
  };

  const handleSubmit = () => {
    setSummary(quote);
    setQuote('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter Quote:</Text>
      <TextInput
type="text"
        value={quote}
        onChangeText={handleQuoteChange}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {summary ? <Text>Summary: {summary}</Text> : null}
    </View>
  );
};

export default App;
