/**
 * Perkenalan penyusunan kode di Minecraft Edu
 * 
 * - Spawn animal dengan command
 * 
 * - User bisa menentukan berapa kali spawn
 */
/**
 * Jika ada waktu tambahan, bisa lanjut ke pembuatan "rumah"
 * 
 * Jika tidak, dilakukan di pertemuan berikutnya.
 */
player.onChat("house", function () {
    // Pastikan pilih hollow agar dalamnya kosong.
    blocks.fill(
    PLANKS_BIRCH,
    pos(-4, 0, -4),
    pos(4, 5, 4),
    FillOperation.Hollow
    )
})
player.onChat("cat", function (num1) {
    for (let index = 0; index < num1; index++) {
        mobs.spawn(CAT, pos(0, 10, 0))
    }
})
player.onChat("panda", function () {
    mobs.spawn(PANDA, pos(0, 10, 0))
})
