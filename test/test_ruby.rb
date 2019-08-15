Dir.glob('./snippets/ruby/*.rb').each do |f|
  out = system('ruby ' + f)
  if out == false then
    abort()
  elsif out == nil then
    about()
  else
    exit()
  end
end
