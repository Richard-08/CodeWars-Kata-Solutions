function decode(r) {
    let a = "abcdefghijklmnopqrstuvwxyz"
    let m = r.match(/(\d+)([a-z]+)/);
    let nb = parseInt(m[1]) % 26;
    let s = m[2];
    let dict = { 3: 9, 9: 3, 21: 5, 5: 21, 7: 15, 15: 7, 11: 19, 19: 11, 17: 23, 23: 17, 25: 25, 1: 1 }
    let n = dict[nb];
    if (n === undefined)
        return "Impossible to decode";
    var res = "";
    for (let c of s)
        res += a[(a.indexOf(c) * n) % 26];
    return res;
}
console.log(decode("1273409kuqhkoynvvknsdwljantzkpnmfgf"));

/* testing_decode("1273409kuqhkoynvvknsdwljantzkpnmfgf", "uogbucwnddunktsjfanzlurnyxmx")
testing_decode("1544749cdcizljymhdmvvypyjamowl", "mfmwhbpoudfujjozopaugcb")
testing_decode("105860ymmgegeeiwaigsqkcaeguicc", "Impossible to decode")
testing_decode("1122305vvkhrrcsyfkvejxjfvafzwpsdqgp", "rrsxppowmjsrclfljrajtybwviqb") */