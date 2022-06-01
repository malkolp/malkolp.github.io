window.doctype_     = [
    {
        id          : 1,
        tid         : 'tid1',
        name        : 'surat keterangan kesehatan produk hewan',
        alias       : 'skkh',
    },
    {
        id          : 2,
        tid         : 'tid2',
        name        : 'surat keterangan kesehatan produk hewan untuk lalulintas ke luar wilayah provinsi',
        alias       : 'skkph',
    },
    {
        id          : 3,
        tid         : 'tid3',
        name        : 'dokumen rekomendasi pengeluaran dan pemasukan hewan/ternak/produk hewan',
        alias       : 'dokumen rekomendasi',
    },
    {
        id          : 4,
        tid         : 'tid4',
        name        : 'dokumen perizinan pengeluaran/pemasukan satwa liar/satwa dilindungi',
        alias       : 'dokumen perizinan',
    },
];

window.read_doctype_    = (remove=false)=>{
    const x             = {};

    window.doctype_.forEach(e=>{
        x[e.tid]        = {
            id          : e.id,
            tid         : e.tid,
            name        : e.name,
            alias       : e.alias,
        };
    });
    if (remove)
        delete window.doctype_;

    return x;
};