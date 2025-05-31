function todoList() {
  const tasks = [];

  while (true) {
    const action = prompt("Masukkan 'add' untuk menambahkan tugas, 'view' untuk melihat daftar, atau 'quit' untuk keluar:").toLowerCase();

    if (action === "add") {
      const task = prompt("Masukkan tugas:");
      tasks.push(task);
      console.log(`Tugas '${task}' telah ditambahkan.`);
    } else if (action === "view") {
      console.log("Daftar tugas:");
      tasks.forEach((task, i) => console.log(`${i + 1}. ${task}`));
    } else if (action === "quit") {
      console.log("Keluar dari program.");
      break;
    } else {
      console.log("Aksi tidak valid.");
    }
  }
}

todoList();