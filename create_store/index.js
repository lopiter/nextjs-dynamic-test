const globby = require('globby');
var fs = require('fs')


const listAllFilesAndDirs = dir => globby(`${dir}/components/**/*`);


(async () => {
  const result = await listAllFilesAndDirs(process.cwd());
  const _m = new Map();
  result.forEach(i => {
      const f = i.substr(i.indexOf('components') + 'components'.length + 1, i.length).split('.').slice(0, -1).join('.')
      if(f.startsWith('loader/'))return; 
      const _f = f.split('/')
      const _layout_key =_f[0] + ''

      if (!_m.has(_layout_key)) {
        _m.set(_layout_key, {})
      }
      const layout = _m.get(_layout_key)
      const key = _f.slice(1).join('/')
      layout[key] = `dynamic(() => import('components/${_layout_key}/${key}'))\n`
  }
  )

  var writer = fs.createWriteStream('./components/loader/component_store.js')
  writer.write("import dynamic from 'next/dynamic'") 
  writer.write("\n") 
  writer.write("const COMPONENTS = { ") 
  _m.forEach( ( value, key, map) => {
    writer.write(`${key}: {`) 
    for(let _name in value) {
      writer.write(`'${_name}': ${value[_name]},`)
    }
    writer.write('},\n') 
  })
  writer.write("}") 
  writer.write("\n") 
  writer.write("export default COMPONENTS") 
  writer.end() 
})();