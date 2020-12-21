class GenerateRandom {
  // This generated a random four digit id;
  onGenerateFourDigits() {
    const chars = '123456789';
    const length = 4;
    let result = '';
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
}

export default GenerateRandom;
