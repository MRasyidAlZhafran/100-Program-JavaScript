const user = {
    nama: "Huhuy",
    sayHello: function() {
        console.log("Halo, " + nama); // ❌ ERROR: nama is not defined
    }
};

user.sayHello();