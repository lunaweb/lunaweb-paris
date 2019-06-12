Hologram::CodeExampleRenderer::Factory.define 'html_small' do
  example_template 'markup_small_example_template'
  lexer { Rouge::Lexer.find('html') }
end
