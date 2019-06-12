Hologram::CodeExampleRenderer::Factory.define 'html_primary' do
  example_template 'markup_primary_example_template'
  lexer { Rouge::Lexer.find('html') }
end
