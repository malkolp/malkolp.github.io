window.doctype_     = [
    {
        id          : 1,
        tid         : 'tid1',
        name        : 'surat keterangan kesehatan produk hewan',
        alias       : 'skkh',
        format      : 'uppercase',
    },
    {
        id          : 2,
        tid         : 'tid2',
        name        : 'surat keterangan kesehatan produk hewan untuk lalulintas ke luar wilayah provinsi',
        alias       : 'skkph',
        format      : 'uppercase',
    },
    {
        id          : 3,
        tid         : 'tid3',
        name        : 'dokumen rekomendasi pengeluaran dan pemasukan hewan/ternak/produk hewan',
        alias       : 'dokumen rekomendasi',
        format      : 'capitalize',
    },
    {
        id          : 4,
        tid         : 'tid4',
        name        : 'dokumen perizinan pengeluaran/pemasukan satwa liar/satwa dilindungi',
        alias       : 'dokumen perizinan',
        format      : 'capitalize',
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
            format      : 'text-' + e.format,
        };
    });
    if (remove)
        delete window.doctype_;

    return x;
};