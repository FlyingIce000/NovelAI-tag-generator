        // 弹出弹窗
        function openPopup() {
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('popup').style.display = 'block';
        }
        // 关闭弹窗
        function closePopup() {
            document.getElementById('overlay').style.display = 'none';
            document.getElementById('popup').style.display = 'none';
        }
        // 自动弹出
        window.onload = function() {
            openPopup();
        };