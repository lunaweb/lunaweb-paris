Hologram::CodeExampleRenderer::Factory.define 'html_medium_primary' do
  example_template 'markup_medium_primary_example_template'
  lexer { Rouge::Lexer.find('html') }
end
