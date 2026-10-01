/* =====================================================
   MUFI WEATHER
===================================================== */

function cekCuaca() {

    let kota = document.getElementById("kota").value;
    let hasil = document.getElementById("hasil");

    if (kota == "") {

        hasil.innerHTML = `
            <div class="welcome">

                <div class="big-icon">
                    ⚠️
                </div>

                <h2>Pilih Kota</h2>

                <p>
                    Silakan pilih kota terlebih dahulu.
                </p>

            </div>
        `;

        return;
    }


    if (kota == "medan") {

        tampilkanCuaca(
            "Medan",
            "🌤️",
            "Cerah Berawan",
            "32°C",
            "75%",
            "14 km/jam",
            "34°C",
            "10 km",
            "06:15",
            "18:20",
            "🌴 Cocok untuk aktivitas luar ruangan"
        );

    }

    else if (kota == "jakarta") {

        tampilkanCuaca(
            "Jakarta",
            "🌧️",
            "Hujan Ringan",
            "29°C",
            "80%",
            "10 km/jam",
            "31°C",
            "7 km",
            "05:45",
            "17:55",
            "☔ Sebaiknya bawa payung"
        );

    }

    else if (kota == "bandung") {

        tampilkanCuaca(
            "Bandung",
            "☁️",
            "Berawan",
            "24°C",
            "78%",
            "8 km/jam",
            "25°C",
            "9 km",
            "05:50",
            "17:50",
            "☕ Cuaca cocok untuk bersantai"
        );

    }

    else if (kota == "surabaya") {

        tampilkanCuaca(
            "Surabaya",
            "☀️",
            "Cerah",
            "33°C",
            "70%",
            "12 km/jam",
            "36°C",
            "12 km",
            "05:30",
            "17:40",
            "🧴 Jangan lupa gunakan pelindung dari matahari"
        );

    }

    else if (kota == "yogyakarta") {

        tampilkanCuaca(
            "Yogyakarta",
            "🌤️",
            "Cerah Berawan",
            "30°C",
            "72%",
            "9 km/jam",
            "32°C",
            "11 km",
            "05:40",
            "17:45",
            "🚶 Cocok untuk jalan-jalan"
        );

    }

}


/* =====================================================
   TAMPILKAN CUACA
===================================================== */

function tampilkanCuaca(
    namaKota,
    icon,
    kondisi,
    suhu,
    kelembapan,
    angin,
    terasa,
    jarak,
    matahariTerbit,
    matahariTerbenam,
    rekomendasi
) {

    let hasil = document.getElementById("hasil");


    hasil.innerHTML = `

        <div class="location">
            📍 ${namaKota}
        </div>


        <div class="weather-icon">
            ${icon}
        </div>


        <div class="temperature">
            ${suhu}
        </div>


        <div class="condition">
            ${kondisi}
        </div>


        <!-- INFO UTAMA -->

        <div class="info">

            <div class="info-box">

                <div class="info-icon">
                    💧
                </div>

                <div class="info-title">
                    Kelembapan
                </div>

                <div class="info-value">
                    ${kelembapan}
                </div>

            </div>


            <div class="info-box">

                <div class="info-icon">
                    💨
                </div>

                <div class="info-title">
                    Angin
                </div>

                <div class="info-value">
                    ${angin}
                </div>

            </div>


            <div class="info-box">

                <div class="info-icon">
                    🌡️
                </div>

                <div class="info-title">
                    Suhu
                </div>

                <div class="info-value">
                    ${suhu}
                </div>

            </div>

        </div>


        <!-- DETAIL -->

        <div class="extra-info">

            <div class="extra-box">

                <span>🌡️</span>

                <div>
                    <small>Terasa Seperti</small>
                    <b>${terasa}</b>
                </div>

            </div>


            <div class="extra-box">

                <span>👁️</span>

                <div>
                    <small>Jarak Pandang</small>
                    <b>${jarak}</b>
                </div>

            </div>


            <div class="extra-box">

                <span>🌅</span>

                <div>
                    <small>Matahari Terbit</small>
                    <b>${matahariTerbit}</b>
                </div>

            </div>


            <div class="extra-box">

                <span>🌇</span>

                <div>
                    <small>Matahari Terbenam</small>
                    <b>${matahariTerbenam}</b>
                </div>

            </div>

        </div>


        <!-- REKOMENDASI -->

        <div class="recommendation">

            <span>💡</span>

            <div>

                <small>Rekomendasi Hari Ini</small>

                <p>
                    ${rekomendasi}
                </p>

            </div>

        </div>


        <!-- WAKTU -->

        <div class="update-time">

            🕐 Terakhir diperbarui:
            <span id="jamSekarang"></span>

        </div>

    `;


    /* Animasi */

    hasil.classList.remove("show");

    setTimeout(function() {

        hasil.classList.add("show");

    }, 10);


    /* Jam */

    tampilkanJam();


    /* Warna berdasarkan cuaca */

    ubahTemaCuaca(kondisi);

}


/* =====================================================
   JAM
===================================================== */

function tampilkanJam() {

    let jam =
        document.getElementById("jamSekarang");


    if (!jam) {
        return;
    }


    let sekarang =
        new Date();


    let waktu =
        sekarang.toLocaleTimeString(
            "id-ID",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );


    jam.textContent =
        waktu;

}


/* =====================================================
   TEMA CUACA
===================================================== */

function ubahTemaCuaca(kondisi) {

    let body =
        document.body;


    body.classList.remove(
        "cuaca-cerah",
        "cuaca-hujan",
        "cuaca-awan"
    );


    if (
        kondisi.includes("Hujan")
    ) {

        body.classList.add(
            "cuaca-hujan"
        );

    }

    else if (
        kondisi.includes("Cerah")
    ) {

        body.classList.add(
            "cuaca-cerah"
        );

    }

    else {

        body.classList.add(
            "cuaca-awan"
        );

    }

}function kembali() {
    window.location.href = "cuaca.html";
}