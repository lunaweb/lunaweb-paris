Hologram::CodeExampleRenderer::Factory.define 'html_small_primary' do
  example_template 'markup_small_primary_example_template'
  lexer { Rouge::Lexer.find('html') }
end
