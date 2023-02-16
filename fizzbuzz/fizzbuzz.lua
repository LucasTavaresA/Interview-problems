local total = (arg[1] or 100)
local divs = { { 15, "fizzbuzz" }, { 3, "fizz" }, { 5, "buzz" } }

for n = 1, total do
  for i, _ in ipairs(divs) do
    if n % divs[i][1] == 0 then
      print(divs[i][2])
      goto skip
    end
  end

  print(n)

  ::skip::
end
