const { exec } = require('child_process');
// 输出当前目录（不一定是代码所在的目录）下的文件和文件夹
exec('scp -i ~/.ssh/id_rsa test.json ggjando65@10.140.0.15:~', (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})

//'scp -i ~/.ssh/id_rsa test.json ggjando65@10.140.0.2:/var/call_me/common_data'