Hologram::CodeExampleRenderer::Factory.define 'iframify_both' do
  example_template 'iframify_both_example_template'
  lexer { Rouge::Lexer.find('html') }
end