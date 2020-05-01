require('https')
  .request('https://blueoakcouncil.org/copyleft.json')
  .once('response', function (response) {
    var chunks = []
    response
      .on('data', function (chunk) { chunks.push(chunk) })
      .once('error', function (error) { throw error })
      .once('end', function () {
        var parsed = JSON.parse(Buffer.concat(chunks))
        var output = {}
        var families = parsed.families
        Object.keys(families).forEach(function (key) {
          var licenses = []
          families[key].forEach(function (group) {
            group.versions.forEach(function (version) {
              version.name = group.name
              licenses.push(version)
            })
          })
          output[key] = licenses
        })
        require('fs').writeFileSync(
          'index.json', JSON.stringify(output, null, 2)
        )
      })
  })
  .end()
