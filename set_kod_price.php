<?php
// Start the session
session_start();
?>
<html>
<body>
    <form action="/service/set_data" method="post">
        <h1>Form Setting Token KOD</h1>
        <label for="percent">Isi dengan persentase terjual yg diinginkan</label><br>
        <input type="text" name="percent" value="" required placeholder="Ex: 30"><br><br>
        <label for="percent">Isi dengan jumlah koin yg terjual</label><br>
        <input type="text" name="sold" value="" required placeholder="Ex: 50,000,000"><br><br>
        <button type="submit">Simpan</button><br><br>
        <?php
            if (!empty($_SESSION)) {
                echo $_SESSION['status'];
                unset($_SESSION['status']);
            }
        ?>
    </form>
</body>    
</html>