Hologram::CodeExampleRenderer::Factory.define 'html_medium' do
  example_template 'markup_medium_example_template'
  lexer { Rouge::Lexer.find('html') }
end
