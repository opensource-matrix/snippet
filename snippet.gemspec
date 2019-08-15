require 'json'

file = File.open('./package.json')
file = file.read
version = JSON.parse(file)['version']

Gem::Specification.new do |s|
  s.name        = 'snippetpkg'
  s.version     = version
  s.licenses    = ['MIT']
  s.summary     = "A library of code snippets."
  s.description = "A library of code snippets to make life easier when you are looking for how to do something."
  s.authors     = ["Matrix"]
  s.email       = 'uiysgamer@gmail.com'
  s.files       = Dir.glob("./**")
  s.homepage    = 'https://github.com/opensource-matrix/snippet'
  s.metadata    = { "source_code_uri" => "https://github.com/opensource-matrix/snippet" }
end
