

// fetch = 取り出す
async function fetchUserData() { 
  const username = prompt('GitHub ユーザー名を入力してください:');
  const userDataContainer = document.querySelector('#userDataContainer');

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    userDataContainer.innerHTML = `
    <p>ユーザー名：${userData.login}</p>
    <p>名前：${userData.name}</p>
    <p>フォロワー数：${userData.followers}</p>
    `;
  }
  catch(error) {
    userDataContainer.innerHTML = `
    
    <p style="color: red">エラーが発生しました。</p>
    `;
  }
}