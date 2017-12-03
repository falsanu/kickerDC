const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

class HashModel {
  static generate(hashLength = 5) {
    let hash = '';

    for (let i = 0; i < hashLength; i++) {
      hash += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return hash;
  }
}

const Hash = new HashModel();

module.exports = Hash;