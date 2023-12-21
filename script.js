//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
      let blockId = document.getElementById('block_id').value;
      let color = document.getElementById('color_id').value;

      if (blockId >= 1 && blockId <= 9) {
        document.getElementById(blockId).style.backgroundColor = color;

        // Reset all other grid items to transparent
        for (let i = 1; i <= 9; i++) {
          if (i != blockId) {
            document.getElementById(i).style.backgroundColor = 'transparent';
          }
        }
      } else {
        alert('Please enter a valid block ID (1-9).');
      }
    });

    document.getElementById('reset_button').addEventListener('click', function() {
      // Reset all grid items to transparent
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i).style.backgroundColor = 'transparent';
      }
    });